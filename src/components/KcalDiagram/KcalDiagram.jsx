import './KcalDiagram.css'
import DiagramHeader from './KcalDiagramComponents/DiagramHeader';
import KcalNumber from './KcalDiagramComponents/KcalNumber';
import DiagramMain from './KcalDiagramComponents/DiagramMain';

function KcalDiagram() {
    return (
      <div className="KcalDiagram">
        <DiagramHeader/>
        <div className='KcalDiagramFlexMain'>
            <KcalNumber/>
            <DiagramMain/>
        </div>
        
      </div>
    );
  }
  
  export default KcalDiagram;