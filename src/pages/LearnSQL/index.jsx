import { SQLIcon } from '../../assets/icons';
import BasicOperations from './articles/BasicOperations';
import DataTypes from './articles/DataTypes';
import DBFundamentals from './articles/DBFundamentals';
import DBMS from './articles/DBMS';
import ERModel from './articles/ERModel';
import ImportantCommands from './articles/ImportantCommands';
import Normalization from './articles/Normalization';
import ObjectsInDB from './articles/ObjectsInDB';
import SQLFundamentals from './articles/SQLFundamentals';

import './styles.css';

const LearnSQL = () => {
    return (
        <>
            <section className='sql-section'>
                <div className='flex flex-row items-center gap-2'>
                    <SQLIcon className='w-8' />
                    <h1 className='gradient-text-sql'>SQL</h1>
                </div>
                <SQLFundamentals />
                <DBFundamentals />
                <DBMS />
                <ObjectsInDB />
                <ImportantCommands />
                <DataTypes />
                <BasicOperations />
                <ERModel />
                <Normalization />
            </section>
        </>
    );
};

export default LearnSQL;