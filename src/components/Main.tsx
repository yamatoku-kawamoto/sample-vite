import WarningSharpIcon from '@mui/icons-material/WarningSharp';
import {styled} from 'styled-components';


const StyledWarningSharpIcon = styled(WarningSharpIcon)`
    color: red;
`

function MainSection(){
    return (
        <main>
            <StyledWarningSharpIcon />
        </main>
    )
}
export default MainSection