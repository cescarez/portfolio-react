import {React, useState} from 'react';
import Gist from 'react-gist';
import pdf from '../data/resume.pdf';

const Resume = () => {
    const [showPdf, setShowPdf] = useState(false);
    const root = document.getElementById('root'); {/* for use with react-gist */}


    return (
        <div>
            <h4 onClick={()=>setShowPdf(!showPdf)}>{showPdf ? 'Hide PDF' : 'Show PDF'}</h4>
            {showPdf && <object data={pdf} type="application/pdf" width="900px" height="1175px"> </object>}
            <Gist id="e339f1c12c1f937cb8f6ace97872c353"/> {/* Auto-populates from resume gist */}
        </div>
    );
}

export default Resume;