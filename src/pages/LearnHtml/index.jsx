
import { Html5Icon } from '../../assets/icons';
import ContentStructure from './articles/ContentStructure';
import HTMLFundamentals from './articles/HTMLFundamentals';
import InteractiveHTML from './articles/Forms&InteractiveHTML';
import MultimediaHTML from './articles/MultimediaIHTML';
import SemanticHTML from './articles/SemanticHTML';

import './styles.css'

const LearnHtml = () => {
    return (
        <section className='html-section'>
            <div className='flex flex-row items-center gap-2'>
                <Html5Icon className='w-8' />
                <h1 className='gradient-text-html'>HTML5</h1>                
            </div>
            <HTMLFundamentals />
            <ContentStructure />
            <SemanticHTML />
            <MultimediaHTML />
            <InteractiveHTML />
        </section>
    );
};

export default LearnHtml;