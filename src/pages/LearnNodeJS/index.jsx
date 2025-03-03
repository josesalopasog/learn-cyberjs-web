import { NodeJSIcon } from '../../assets/icons';

import NodeJSFundamentals from './articles/NodeJsFundamentals';
import NodeJSAsynchronism from './articles/NodeJsAsynchronism';

import './styles.css'

const LearnNodeJS = () => {
    return(
        <>
            <section className='nodejs-section' id='nodejs-section'>
                <div className='flex flex-row items-center gap-2'>
                    <NodeJSIcon className='w-8' />
                    <h1 className='gradient-text-nodejs'>Node JS</h1>
                </div>
                <NodeJSFundamentals />
                <NodeJSAsynchronism />
            </section>
        </>
    );
}

export default LearnNodeJS;