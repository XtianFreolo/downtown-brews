import { Request, Response } from "express";
import pool from "../config/db";

export async function getFeaturedMenuItems(req: Request, res: Response) {
    try {
        const result = await pool.query(`
      SELECT 
        menu_items.id,
        menu_items.name,
        menu_items.description,
        menu_items.price,
        menu_items.image_url,
        menu_items.is_featured,
        menu_categories.name AS category,
        menu_categories.slug AS category_slug
      FROM menu_items
      JOIN menu_categories
        ON menu_items.category_id = menu_categories.id
      WHERE menu_items.is_featured = true
        AND menu_items.is_available = true
      ORDER BY menu_categories.display_order ASC;
    `);

        res.json(result.rows);
    } catch (error) {
        console.error("Failed to get featured menu items:", error);

        res.status(500).json({
            status: "error",
            message: "Failed to get featured menu items",
        });
    }
}