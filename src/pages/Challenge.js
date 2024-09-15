import React from 'react';
import Slide from '../components/Slide';

function Challenge() {
  return (
    <Slide title="The Challenge">
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Limited Immersion in Traditional Training:</strong> Current educational methods may not provide the hands-on experience essential for mastering complex orthopedic procedures.</li>
        <li><strong>Spatial Skill Development:</strong> Traditional 2D learning materials can be insufficient in developing the spatial reasoning critical for surgeons.</li>
        <li><strong>Barriers to VR Adoption:</strong> High costs and technical complexities have limited the widespread use of VR in medical training.</li>
      </ul>
    </Slide>
  );
}

export default Challenge;