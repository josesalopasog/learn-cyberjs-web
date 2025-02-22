import './styles.css';

const TableExample = () => {
    return (
        <>
            <div className='table-example'>
            <div className='table-title-example'>{`<table></table>`} </div>
                <table className='table-content-example'>
                    <caption className='caption-example'>{`<caption></caption>`}</caption>
                    
                    <thead className='thead-example'>
                        <div className='table-thead-example'>{`<thead></thead>`} </div>
                        <tr className='tr-example'>
                            <th className='th-example'>{`<th></th>`}</th>
                            <th className='th-example'>{`<th></th>`}</th>
                            <th className='th-example'>{`<th></th>`}</th>
                        </tr>
                    </thead>
                    
                    <tbody className='tbody-example'>
                        <div className='table-tbody-example'>{`<tbody></tbody>`} </div>
                        <tr className='tr-example'>
                            <td className='td-example'>{`<td></td>`}</td>
                            <td className='td-example'>{`<td></td>`}</td>
                            <td className='td-example'>{`<td></td>`}</td>
                        </tr>
                        <tr className='tr-example'>
                            <td className='td-example'>{`<td></td>`}</td>
                            <td className='td-example'>{`<td></td>`}</td>
                            <td className='td-example'>{`<td></td>`}</td>
                        </tr>
                    </tbody>
                    
                    <tfoot className='tfoot-example'>
                        <div className='table-thead-example'>{`<tfoot></tfoot>`} </div>
                        <tr className='tr-example'>
                            <td className='td-example'>{`<td></td>`}</td>
                            <td className='td-example'>{`<td></td>`}</td>
                            <td className='td-example'>{`<td></td>`}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
};

export default TableExample;