import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

function DraggableIcon({ id, src, alt, position, onDrop, onDoubleClick, name }) {
  const [{ isDragging }, drag] = useDrag({
    type: 'icon',
    item: { id, position },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'icon',
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      const newPosition = {
        x: Math.round(item.position.x + delta.x),
        y: Math.round(item.position.y + delta.y),
      };
      onDrop(item.id, newPosition);
    },
  });

  return (
    <div ref={(node) => drag(drop(node))} style={{ left: position.x, top: position.y, opacity: isDragging ? 0.5 : 1 }} className="icon-wrapper" onDoubleClick={onDoubleClick}>
      <img src={src} alt={alt} />
      <span className="icon-name">{name}</span>
    </div>
  );
}

export default DraggableIcon;
