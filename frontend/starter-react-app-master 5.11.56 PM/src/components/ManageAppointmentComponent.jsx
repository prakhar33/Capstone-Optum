import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ManagePatientAppt from './ManagePatientAppt';
import ViewPatientApp from './ViewPatientAppt';

const ManageAppointment = () => {
    return (
        <div>
            Manage Component
            <div>
                <Tabs>
                    <TabList>
                        <Tab>View</Tab>
                        <Tab>Manage</Tab>

                    </TabList>

                    <TabPanel>
                        <ViewPatientApp></ViewPatientApp>
                    </TabPanel>
                    <TabPanel>
                        <ManagePatientAppt></ManagePatientAppt>
                    </TabPanel>

                </Tabs>

            </div>
        </div>
    )
}
export default ManageAppointment;