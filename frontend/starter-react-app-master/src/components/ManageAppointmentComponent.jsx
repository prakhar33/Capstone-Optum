import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PresentPatientAppt from './PresentPatientAppt';
import PastPatientAppt from './PastPatientAppt';

const ManageAppointments = () => {
    return (
        <div>
            <center><h2>Manage your Appointments</h2></center>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Past</Tab>
                        <Tab>Future</Tab>

                    </TabList>

                    <TabPanel>
                        <PastPatientAppt></PastPatientAppt>
                        
                    </TabPanel>
                    <TabPanel>
                        <PresentPatientAppt></PresentPatientAppt>
                    </TabPanel>

                </Tabs>

            </div>
        </div>
    )
}
export default ManageAppointments;