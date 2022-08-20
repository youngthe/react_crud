
import React, { useEffect, useState, Component} from "react";

import axios from "axios";
import {Link} from "react-router-dom";

function BoardList(){

    const [inputData, setInputData] = useState([{
        num: '',
        id: '',
        pw: '',
        role: ''
    }])

    useEffect(async() => {
        try{
            // 데이터를 받아오는 동안 시간이 소요되므로 await 필요
            const res = await axios.get("http://localhost:8080/test")
            const _inputData =  res.data.map((rowData) => ({
                num: rowData.num,
                id: rowData.id,
                pw: rowData.pw,
                role: rowData.role
                })
            )
            // 선언된 _inputData 를 최초 선언한 inputData 에 concat 으로 추가
            setInputData(inputData.concat(_inputData))
        } catch(e){
            console.error(e.message)
        }
    },[])

    console.log('App :: inputData :: ', inputData)

    return(
        <div>
            <div>
                <table className='listTable'>
                    <tbody>
                    <tr>
                        <td className='listTableIndex th'>number</td>
                        <td className='listTableTitle th'>phone</td>
                    </tr>

                    {inputData !== 0 ?
                        inputData.map(rowData => (
                            rowData.num !== '' &&
                            <tr>
                                <td className='listTableIndex'>
                                    {/*<Link to={`/BoardContent/${rowData.number}`}>{rowData.number}</Link>*/}
                                    {rowData.num}
                                </td>
                                <td className='listTableTitle'>
                                    {rowData.id}
                                </td>
                                <td className='listTableTitle'>
                                    {rowData.pw}
                                </td>
                                <td className='listTableTitle'>
                                    {rowData.role}
                                </td>
                            </tr>
                        )) :
                        <tr>
                            <td className='listTableIndex'></td>
                            <td className='listTableTitle noData'>작성된 글이 없습니다.</td>
                        </tr>
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}



export default BoardList;