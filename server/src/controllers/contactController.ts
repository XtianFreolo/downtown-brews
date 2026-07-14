import type { Request, Response } from "express";
import pool from "../config/db";

type ContactMessageBody = {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
};

export async function createContactMessage(
    req: Request<object, object, ContactMessageBody>,
    res: Response,
): Promise<void> {
    const name = req.body.name?.trim();
    const email = req.body.email?.trim().toLowerCase();
    const phone = req.body.phone?.trim() || null;
    const message = req.body.message?.trim();

    if (!name || !email || !message) {
        res.status(400).json({
            status: "error",
            message: "Name, email, and message are required",
        });
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        res.status(400).json({
            status: "error",
            message: "Please provide a valid email address",
        });
        return;
    }

    if (name.length > 120 || email.length > 255 || message.length > 5000) {
        res.status(400).json({
            status: "error",
            message: "One or more fields exceed the allowed length",
        });
        return;
    }

    try {
        const result = await pool.query(
            `
        INSERT INTO contact_messages (name, email, phone, message)
        VALUES ($1, $2, $3, $4)
        RETURNING
          id,
          name,
          email,
          phone,
          message,
          status,
          created_at;
      `,
            [name, email, phone, message],
        );

        res.status(201).json({
            status: "success",
            message: "Your message has been received",
            contactMessage: result.rows[0],
        });
    } catch (error) {
        console.error("Failed to create contact message:", error);

        res.status(500).json({
            status: "error",
            message: "Could not submit your message",
        });
    }
}

export async function getContactMessages(
    req: Request,
    res: Response,
): Promise<void> {
    try {
        const result = await pool.query(`
      SELECT
        id,
        name,
        email,
        phone,
        message,
        status,
        created_at
      FROM contact_messages
      ORDER BY created_at DESC;
    `);

        res.status(200).json(result.rows);
    } catch (error) {
        console.error("Failed to get contact messages:", error);

        res.status(500).json({
            status: "error",
            message: "Could not retrieve contact messages",
        });
    }
}

export async function updateContactMessageStatus(
    req: Request,
    res: Response,
): Promise<void> {
    const messageId = Number(req.params.id);
    const status = String(req.body.status || "").trim().toLowerCase();
    const allowedStatuses = ["new", "read", "resolved"];

    if (!Number.isInteger(messageId) || messageId <= 0) {
        res.status(400).json({
            status: "error",
            message: "Message ID must be a positive integer",
        });
        return;
    }

    if (!allowedStatuses.includes(status)) {
        res.status(400).json({
            status: "error",
            message: "Status must be new, read, or resolved",
        });
        return;
    }

    try {
        const result = await pool.query(
            `
        UPDATE contact_messages
        SET status = $1
        WHERE id = $2
        RETURNING
          id,
          name,
          email,
          phone,
          message,
          status,
          created_at;
      `,
            [status, messageId],
        );

        if (result.rowCount === 0) {
            res.status(404).json({
                status: "error",
                message: "Contact message not found",
            });
            return;
        }

        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error("Failed to update contact message:", error);

        res.status(500).json({
            status: "error",
            message: "Could not update contact message",
        });
    }
}