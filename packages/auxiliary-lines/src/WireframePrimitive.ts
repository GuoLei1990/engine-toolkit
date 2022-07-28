import { MathUtil, Vector3 } from "oasis-engine";

/**
 * Wireframe primitive.
 */
export class WireframePrimitive {
  /** global settings for vertex count */
  static circleVertexCount = 40;

  /**
   * Get cuboid wire frame index count.
   */
  static get cuboidIndexCount(): number {
    return 48;
  }

  /**
   * Get sphere wire frame index count.
   */
  static get sphereIndexCount(): number {
    return WireframePrimitive.circleIndexCount * 3;
  }

  /**
   * Get cone wire frame index count.
   */
  static get coneIndexCount(): number {
    return WireframePrimitive.circleIndexCount + 8;
  }

  /**
   * Get unbound cylinder wire frame index count.
   */
  static get unboundCylinderIndexCount(): number {
    return WireframePrimitive.circleIndexCount + 16;
  }

  /**
   * Get capsule wire frame index count.
   */
  static get capsuleIndexCount(): number {
    return (WireframePrimitive.circleIndexCount + WireframePrimitive.ellipticIndexCount) * 2;
  }

  /**
   * Get circle wire frame index count.
   */
  static get circleIndexCount(): number {
    return WireframePrimitive.circleVertexCount * 2;
  }

  /**
   * Get elliptic wire frame index count.
   */
  static get ellipticIndexCount(): number {
    return WireframePrimitive.circleVertexCount * 2;
  }

  /**
   * Store cuboid wireframe mesh data.
   * The origin located in center of cuboid.
   * @param width - Cuboid width
   * @param height - Cuboid height
   * @param depth - Cuboid depth
   * @param positions - position array
   * @param positionOffset - The min of index list
   * @param indices - index array
   * @param indicesOffset - index array offset
   */
  static createCuboidWireframe(
    width: number,
    height: number,
    depth: number,
    positions: Vector3[],
    positionOffset: number,
    indices: Uint16Array | Uint32Array,
    indicesOffset: number
  ): void {
    const halfWidth: number = width / 2;
    const halfHeight: number = height / 2;
    const halfDepth: number = depth / 2;

    // Up
    positions.push(new Vector3(-halfWidth, halfHeight, -halfDepth));
    positions.push(new Vector3(halfWidth, halfHeight, -halfDepth));
    positions.push(new Vector3(halfWidth, halfHeight, halfDepth));
    positions.push(new Vector3(-halfWidth, halfHeight, halfDepth));

    // Down
    positions.push(new Vector3(-halfWidth, -halfHeight, -halfDepth));
    positions.push(new Vector3(halfWidth, -halfHeight, -halfDepth));
    positions.push(new Vector3(halfWidth, -halfHeight, halfDepth));
    positions.push(new Vector3(-halfWidth, -halfHeight, halfDepth));

    // Left
    positions.push(new Vector3(-halfWidth, halfHeight, -halfDepth));
    positions.push(new Vector3(-halfWidth, halfHeight, halfDepth));
    positions.push(new Vector3(-halfWidth, -halfHeight, halfDepth));
    positions.push(new Vector3(-halfWidth, -halfHeight, -halfDepth));

    // Right
    positions.push(new Vector3(halfWidth, halfHeight, -halfDepth));
    positions.push(new Vector3(halfWidth, halfHeight, halfDepth));
    positions.push(new Vector3(halfWidth, -halfHeight, halfDepth));
    positions.push(new Vector3(halfWidth, -halfHeight, -halfDepth));

    // Front
    positions.push(new Vector3(-halfWidth, halfHeight, halfDepth));
    positions.push(new Vector3(halfWidth, halfHeight, halfDepth));
    positions.push(new Vector3(halfWidth, -halfHeight, halfDepth));
    positions.push(new Vector3(-halfWidth, -halfHeight, halfDepth));

    // Back
    positions.push(new Vector3(-halfWidth, halfHeight, -halfDepth));
    positions.push(new Vector3(halfWidth, halfHeight, -halfDepth));
    positions.push(new Vector3(halfWidth, -halfHeight, -halfDepth));
    positions.push(new Vector3(-halfWidth, -halfHeight, -halfDepth));

    // Up
    indices[indicesOffset++] = positionOffset;
    indices[indicesOffset++] = positionOffset + 1;
    indices[indicesOffset++] = positionOffset + 1;
    indices[indicesOffset++] = positionOffset + 2;
    indices[indicesOffset++] = positionOffset + 2;
    indices[indicesOffset++] = positionOffset + 3;
    indices[indicesOffset++] = positionOffset + 3;
    indices[indicesOffset++] = positionOffset;

    // Down
    indices[indicesOffset++] = positionOffset + 4;
    indices[indicesOffset++] = positionOffset + 5;
    indices[indicesOffset++] = positionOffset + 5;
    indices[indicesOffset++] = positionOffset + 6;
    indices[indicesOffset++] = positionOffset + 6;
    indices[indicesOffset++] = positionOffset + 7;
    indices[indicesOffset++] = positionOffset + 7;
    indices[indicesOffset++] = positionOffset + 4;

    // Left
    indices[indicesOffset++] = positionOffset + 8;
    indices[indicesOffset++] = positionOffset + 9;
    indices[indicesOffset++] = positionOffset + 9;
    indices[indicesOffset++] = positionOffset + 10;
    indices[indicesOffset++] = positionOffset + 10;
    indices[indicesOffset++] = positionOffset + 11;
    indices[indicesOffset++] = positionOffset + 11;
    indices[indicesOffset++] = positionOffset + 8;

    // Right
    indices[indicesOffset++] = positionOffset + 12;
    indices[indicesOffset++] = positionOffset + 13;
    indices[indicesOffset++] = positionOffset + 13;
    indices[indicesOffset++] = positionOffset + 14;
    indices[indicesOffset++] = positionOffset + 14;
    indices[indicesOffset++] = positionOffset + 15;
    indices[indicesOffset++] = positionOffset + 15;
    indices[indicesOffset++] = positionOffset + 12;

    // Front
    indices[indicesOffset++] = positionOffset + 16;
    indices[indicesOffset++] = positionOffset + 17;
    indices[indicesOffset++] = positionOffset + 17;
    indices[indicesOffset++] = positionOffset + 18;
    indices[indicesOffset++] = positionOffset + 18;
    indices[indicesOffset++] = positionOffset + 19;
    indices[indicesOffset++] = positionOffset + 19;
    indices[indicesOffset++] = positionOffset + 16;

    // Back
    indices[indicesOffset++] = positionOffset + 20;
    indices[indicesOffset++] = positionOffset + 21;
    indices[indicesOffset++] = positionOffset + 21;
    indices[indicesOffset++] = positionOffset + 22;
    indices[indicesOffset++] = positionOffset + 22;
    indices[indicesOffset++] = positionOffset + 23;
    indices[indicesOffset++] = positionOffset + 23;
    indices[indicesOffset++] = positionOffset + 20;
  }

  /**
   * Store sphere wireframe mesh data.
   * The origin located in center of sphere.
   * @param radius - Sphere radius
   * @param positions - position array
   * @param positionOffset - The min of index list
   * @param indices - index array
   * @param indicesOffset - index array offset
   */
  static createSphereWireframe(
    radius: number,
    positions: Vector3[],
    positionOffset: number,
    indices: Uint16Array | Uint32Array,
    indicesOffset: number
  ): void {
    const shift = new Vector3();

    // X
    WireframePrimitive.createCircleWireframe(radius, 0, shift, positions, positionOffset, indices, indicesOffset);

    // Y
    WireframePrimitive.createCircleWireframe(
      radius,
      1,
      shift,
      positions,
      positionOffset + WireframePrimitive.circleVertexCount,
      indices,
      indicesOffset + WireframePrimitive.circleIndexCount
    );

    // Z
    WireframePrimitive.createCircleWireframe(
      radius,
      2,
      shift,
      positions,
      positionOffset + WireframePrimitive.circleVertexCount * 2,
      indices,
      indicesOffset + WireframePrimitive.circleIndexCount * 2
    );
  }

  /**
   * Store cone wireframe mesh data.
   * The origin located in top of cone.
   * @param radius - The radius of cap
   * @param height - The height of cone
   * @param positions - position array
   * @param positionOffset - The min of index list
   * @param indices - index array
   * @param indicesOffset - index array offset
   */
  static createConeWireframe(
    radius: number,
    height: number,
    positions: Vector3[],
    positionOffset: number,
    indices: Uint16Array | Uint32Array,
    indicesOffset: number
  ): void {
    const shift = new Vector3();

    // Y
    shift.y = -height;
    WireframePrimitive.createCircleWireframe(radius, 1, shift, positions, positionOffset, indices, indicesOffset);

    positions.push(new Vector3());
    positions.push(new Vector3(-radius, -height, 0));
    positions.push(new Vector3(radius, -height, 0));
    positions.push(new Vector3(0, -height, radius));
    positions.push(new Vector3(0, -height, -radius));
    const indexBegin = positionOffset + WireframePrimitive.circleVertexCount;
    indicesOffset += WireframePrimitive.circleIndexCount;
    indices[indicesOffset++] = indexBegin;
    indices[indicesOffset++] = indexBegin + 1;
    indices[indicesOffset++] = indexBegin;
    indices[indicesOffset++] = indexBegin + 2;
    indices[indicesOffset++] = indexBegin;
    indices[indicesOffset++] = indexBegin + 3;
    indices[indicesOffset++] = indexBegin;
    indices[indicesOffset++] = indexBegin + 4;
  }

  /**
   * Store unbound cylinder wireframe mesh data.
   * The origin located in center of sphere.
   * @param radius - The radius
   * @param positions - position array
   * @param positionOffset - The min of index list
   * @param indices - index array
   * @param indicesOffset - index array offset
   */
  static createUnboundCylinderWireframe(
    radius: number,
    positions: Vector3[],
    positionOffset: number,
    indices: Uint16Array | Uint32Array,
    indicesOffset: number
  ): void {
    const height = 5;
    const shift = new Vector3();

    // Y
    WireframePrimitive.createCircleWireframe(radius, 1, shift, positions, positionOffset, indices, indicesOffset);

    const indexBegin = positionOffset + WireframePrimitive.circleVertexCount;
    indicesOffset += WireframePrimitive.circleIndexCount;
    for (let i = 0; i < 8; i++) {
      const radian = MathUtil.degreeToRadian(45 * i);
      positions.push(new Vector3(radius * Math.cos(radian), 0, radius * Math.sin(radian)));
      positions.push(new Vector3(radius * Math.cos(radian), -height, radius * Math.sin(radian)));

      indices[indicesOffset + i * 2] = indexBegin + 2 * i;
      indices[indicesOffset + i * 2 + 1] = indexBegin + 2 * i + 1;
    }
  }

  /**
   * Store capsule wireframe mesh data.
   * The origin located in center of capsule.
   * @param radius - The radius of the two hemispherical ends
   * @param height - The height of the cylindrical part, measured between the centers of the hemispherical ends
   * @param positions - position array
   * @param positionOffset - The min of index list
   * @param indices - index array
   * @param indicesOffset - index array offset
   */
  static createCapsuleWireframe(
    radius: number,
    height: number,
    positions: Vector3[],
    positionOffset: number,
    indices: Uint16Array | Uint32Array,
    indicesOffset: number
  ): void {
    const circleIndicesCount = WireframePrimitive.circleIndexCount;
    const vertexCount = WireframePrimitive.circleVertexCount;
    const shift = new Vector3();
    const halfHeight = height / 2;

    // Y-Top
    shift.y = halfHeight;
    WireframePrimitive.createCircleWireframe(radius, 1, shift, positions, positionOffset, indices, indicesOffset);

    // Y-Bottom
    shift.y = -halfHeight;
    WireframePrimitive.createCircleWireframe(
      radius,
      1,
      shift,
      positions,
      positionOffset + vertexCount,
      indices,
      indicesOffset + circleIndicesCount
    );

    // X-Elliptic
    WireframePrimitive.createEllipticWireframe(
      radius,
      halfHeight,
      2,
      positions,
      positionOffset + vertexCount * 2,
      indices,
      indicesOffset + circleIndicesCount * 2
    );

    // Z-Elliptic
    WireframePrimitive.createEllipticWireframe(
      radius,
      halfHeight,
      0,
      positions,
      positionOffset + vertexCount * 3,
      indices,
      indicesOffset + circleIndicesCount * 2 + WireframePrimitive.ellipticIndexCount
    );
  }

  /**
   * Store circle wireframe mesh data.
   * @param radius - The radius
   * @param axis - The default direction
   * @param shift - The default shift
   * @param positions - position array
   * @param positionOffset - The min of index list
   * @param indices - index array
   * @param indicesOffset - index array offset
   */
  static createCircleWireframe(
    radius: number,
    axis: number,
    shift: Vector3,
    positions: Vector3[],
    positionOffset: number,
    indices: Uint16Array | Uint32Array,
    indicesOffset: number
  ): void {
    const vertexCount = WireframePrimitive.circleVertexCount;

    const twoPi = Math.PI * 2;
    const countReciprocal = 1.0 / vertexCount;
    for (let i = 0; i < vertexCount; ++i) {
      const v = i * countReciprocal;
      const thetaDelta = v * twoPi;

      switch (axis) {
        case 0:
          positions.push(
            new Vector3(shift.x, radius * Math.cos(thetaDelta) + shift.y, radius * Math.sin(thetaDelta) + shift.z)
          );
          break;
        case 1:
          positions.push(
            new Vector3(radius * Math.cos(thetaDelta) + shift.x, shift.y, radius * Math.sin(thetaDelta) + shift.z)
          );
          break;
        case 2:
          positions.push(
            new Vector3(radius * Math.cos(thetaDelta) + shift.x, radius * Math.sin(thetaDelta) + shift.y, shift.z)
          );
          break;
      }

      const globalIndex = i + positionOffset;
      if (i < vertexCount - 1) {
        indices[indicesOffset + 2 * i] = globalIndex;
        indices[indicesOffset + 2 * i + 1] = globalIndex + 1;
      } else {
        indices[indicesOffset + 2 * i] = globalIndex;
        indices[indicesOffset + 2 * i + 1] = positionOffset;
      }
    }
  }

  /**
   * Store elliptic wireframe mesh data.
   * @param radius - The radius of the two hemispherical ends
   * @param height - The height of the cylindrical part, measured between the centers of the hemispherical ends
   * @param axis - The default direction
   * @param positions - position array
   * @param positionOffset - The min of index list
   * @param indices - index array
   * @param indicesOffset - index array offset
   */
  static createEllipticWireframe(
    radius: number,
    height: number,
    axis: number,
    positions: Vector3[],
    positionOffset: number,
    indices: Uint16Array | Uint32Array,
    indicesOffset: number
  ): void {
    const vertexCount = WireframePrimitive.circleVertexCount;
    const twoPi = Math.PI * 2;
    const countReciprocal = 1.0 / vertexCount;
    for (let i = 0; i < vertexCount; ++i) {
      const v = i * countReciprocal;
      const thetaDelta = v * twoPi;

      switch (axis) {
        case 0:
          positions.push(new Vector3(0, radius * Math.sin(thetaDelta) + height, radius * Math.cos(thetaDelta)));
          break;
        case 1:
          positions.push(new Vector3(radius * Math.cos(thetaDelta), height, radius * Math.sin(thetaDelta)));
          break;
        case 2:
          positions.push(new Vector3(radius * Math.cos(thetaDelta), radius * Math.sin(thetaDelta) + height, 0));
          break;
      }

      if (i == vertexCount / 2) {
        height = -height;
      }

      const globalIndex = i + positionOffset;
      if (i < vertexCount - 1) {
        indices[indicesOffset + 2 * i] = globalIndex;
        indices[indicesOffset + 2 * i + 1] = globalIndex + 1;
      } else {
        indices[indicesOffset + 2 * i] = globalIndex;
        indices[indicesOffset + 2 * i + 1] = positionOffset;
      }
    }
  }
}
