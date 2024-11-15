// MjButton.js
import React, { useState } from "react";

const MjAccordion = ({
border,
containerBackgroundColor,
fontFamily,
iconWrappedUrl,
iconUnwrappedUrl,
padding,
paddingTop,
paddingBottom,
paddingLeft,
paddingRight,
iconWidth,
iconHeight,
backgroundColor,
  children,
}) => {

    const accordionStyle = {
        border:border || "2px solid black",
        backgroundColor:containerBackgroundColor || "transparent",
        fontFamily:fontFamily || "Ubuntu, Helvetica, Arial, sans-serif",
        padding:padding || "10px 25px",
        paddingTop:paddingTop || "none",
        paddingBottom:paddingBottom || "none",
        paddingLeft:paddingLeft || "none",
        paddingRight:paddingRight || "none",
    };
    const accordionElementStyle = {
        iconWrappedUrl:iconWrappedUrl || "https://i.imgur.com/bIXv1bk.png",
        iconUnwrappedUrl:iconUnwrappedUrl || "https://i.imgur.com/w4uTygT.png",
        iconWidth:iconWidth || "20px",
        iconHeight:iconHeight || "20px",
    }
    const accordionTitleStyle = {
    }
    const accordionTextStyle = {
    }
    const [items, setItems] = useState([
      { title: "Why use an accordion?", content: "Because emails with a lot of content are most of the time a very bad experience on mobile, mj-accordion comes handy when you want to deliver a lot of information in a concise way." },
      { title: "How it works", content: "Content is stacked into tabs and users can expand them at will. If responsive styles are not supported (mostly on desktop clients), tabs are then expanded and your content is readable at once." }
    ])
    const [openItems, setOpenItems] = useState(new Array(items.length).fill(false))
    const toggleItem = (index) => {
      setOpenItems(prev => {
        const newOpenItems = [...prev]
        newOpenItems[index] = !newOpenItems[index]
        return newOpenItems
      })
    }
  
    const addItem = () => {
      const newItem = { title: `New Item ${items.length + 1}`, content: "Content for the new item." }
      setItems(prev => [...prev, newItem])
      setOpenItems(prev => [...prev, false])
    }
  return (
<div style={{
      width: '100%',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '16px',
      backgroundColor: 'white',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
    }}>
      <div style={{
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        {items.map((item, index) => (
          <div key={index} style={{ borderBottom: index < items.length - 1 ? '1px solid #e2e8f0' : 'none' }}>
            <div 
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px',
                cursor: 'pointer'
              }}
              onClick={() => toggleItem(index)}
            >
              <h2 style={{ fontSize: '18px', fontWeight: 500 }}>{item.title}</h2>
              <Image 
                src={openItems[index] ? "https://i.imgur.com/bIXv1bk.png" : "https://i.imgur.com/w4uTygT.png"}
                alt={openItems[index] ? "Collapse" : "Expand"}
                width={16}
                height={16}
              />
            </div>
            {openItems[index] && (
              <div style={{ padding: '16px', color: '#4a5568' }}>
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={addItem}
        style={{
          marginTop: '16px',
          padding: '8px 16px',
          backgroundColor: '#4a5568',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Add New Item
      </button>
    </div>
  );
};

export default MjAccordion;
