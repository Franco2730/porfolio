import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ItemTypes = {
  ICON: 'icon',
};

const DraggableIcon = ({ id, src, alt, position, onDrop, onDoubleClick }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.ICON,
    item: { id, position },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }), [id, position]);

  const [, drop] = useDrop(() => ({
    accept: ItemTypes.ICON,
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.position.x + delta.x);
      const top = Math.round(item.position.y + delta.y);
      onDrop(item.id, { x: left, y: top });
    },
  }), [id, position]);

  return (
    <div
      ref={(node) => drag(drop(node))}
      className="icon-wrapper"
      style={{
        left: position.x,
        top: position.y,
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
      onDoubleClick={onDoubleClick}
    >
      <img src={src} alt={alt} />
    </div>
  );
};

export default DraggableIcon;
