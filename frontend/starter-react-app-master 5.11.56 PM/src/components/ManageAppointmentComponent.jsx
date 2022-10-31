import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PresentPatientAppt from './PresentPatientAppt';
import PastPatientAppt from './PastPatientAppt';

const ManageAppointment = () => {
    return (
        <div>
            Manage Component
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
export default ManageAppointment;