import React from 'react'

const ScheduleInstructions = () => {
    return (
        <div style = {{backgroundColor: '#EBE9E7', padding: '10px', borderRadius: '5%'}}>
            <h3>How To Effectively Use This Spreadsheet</h3>
            <p><span style = {{color: 'red'}}>DO NOT</span> change the ID for each employee. Technically, 
            changing the ID will not break the application, though if you were to change it and attempt to save your data,
            your updated changes will not be saved. If you do change the IDs, you can <span style ={{color: 'green'}}>refresh the page</span> and the ID will be reverted, thus allowing you to edit as needed.</p>
            <br></br>
            <h4> Helpful Tricks</h4>
            <ul>
                <li>Highlight a cell and press CMD/Control + C to copy its contents. Highlight an empty cell and press CMD/Control + V to paste the copied cell's contents. </li>
                <li>Highlight multiple cells by dragging a click over a single cell. (Clear all cells by highlighting all cells and pressing backspace)</li>
                <li>Combine the first two Tricks to copy and paste multiple cells at a time</li>
            </ul>
        </div>
    )
}

export default ScheduleInstructions
