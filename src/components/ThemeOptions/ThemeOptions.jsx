import React from 'react';

function ThemeOptions() {
  return (
    <div className="ThemeOptions">
      <span>icon</span>
      <h4>Page animation</h4>
      <select>
        <option disabled>choose</option>
        <option>Random</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <h4>Colors</h4>
      <ul>
        <span datatype="#00A3E1"></span>
        <span datatype="#E82A2A"></span>
        <span datatype="#6ac045"></span>
        <span datatype="#D1A71D"></span>
        <span datatype="#FF1493"></span>
        <span datatype="#5078FF"></span>
      </ul>
    </div>
  );
}

export default ThemeOptions;
