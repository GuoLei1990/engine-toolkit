/**
 * Gizmo State
 */
export enum State {
  /**
   * translate state
   */
  translate = 0x1,
  /**
   * rotate state
   */
  rotate = 0x2,
  /**
   * scale state
   */
  scale = 0x4,
  /**
   * all state
   */
  all = 0xf
}

/**
 * Gizmo Anchor State
 */
export enum AnchorType {
  /**
   * positions the Gizmo at the actual pivot point
   */
  Pivot,
  /**
   * positions the Gizmo at the center of the selected entity or entities rendered bounds
   */
  Center
}

/**
 * Gizmo Coordinate State
 */
export enum CoordinateType {
  /**
   * aligns to the selected entity or entities local space
   */
  Local,
  /**
   * aligns to the world space orientation
   */
  Global
}
