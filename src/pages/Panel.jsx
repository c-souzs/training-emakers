import EditGame from '../components/adm/EditGame'
import AdmPanelMain from '../components/adm/Main'
import RegisterGame from '../components/adm/RegisterGame'
import RemoveGame from '../components/adm/RemoveGame'
import useTitlePage from '../hooks/useTitlePage'

export default function Adm() {
    useTitlePage('Painel ADM')
    return (
        <AdmPanelMain>
            <RegisterGame />
            <RemoveGame />
            <EditGame />
        </AdmPanelMain>
    )
}
