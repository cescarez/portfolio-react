import {React, useState} from 'react';
import Gist from 'react-gist';
import {Button} from 'react-bootstrap';
import pdf from '../data/resume.pdf';

const Resume = () => {
    const [showPdf, setShowPdf] = useState(false);
    const root = document.getElementById('root'); {/* for use with react-gist */}


    return (
        <div>
            <div className='mt-2'>
                <Button variant='secondary' onClick={()=>setShowPdf(!showPdf)}>{showPdf ? 'Hide PDF' : 'Show PDF'}</Button>
                {showPdf && <div><br/><object data={pdf} type="application/pdf" width="900px" height="1175px"> </object></div>}
            </div>
            <div>
                <Gist id="e339f1c12c1f937cb8f6ace97872c353"/> {/* Auto-populates from resume gist */}
            </div>
        </div>
    );
}

export default Resume;