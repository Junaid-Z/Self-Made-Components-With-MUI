function filterRow(row, cols, term = "", searchCat) {
    let accept = false;
    if (searchCat === '') {
        cols.map((col) => {
            console.log(row[col.value])
            if (row[col.value].toString().toLowerCase().indexOf(term.toLowerCase()) !== -1) {
                accept = true;
                console.log(accept);
            }
            return undefined;
        })
    }
    else {
        if (row[searchCat].toString().toLowerCase().indexOf(term.toLowerCase()) !== -1) {
            accept = true;
        }
    }
    return accept;
}
export default filterRow;