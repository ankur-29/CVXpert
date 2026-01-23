import { DashboardLayout } from "../components/DashboardLayout";
import { dashboardStyles as styles } from "../assets/dashboardStyles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { use } from "react";


export const Dashboard = () => {
    const navigate = useNavigate();
    const [openModel, setOpenModel] = useState(false);
    const [allResumes, setAllResumes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deleteResume, setDeleteResume] = useState(null);
    const [deleteConfirm, setDeleteConfirm] = useState(false);

    return (
        <DashboardLayout>
            <div className={styles.container}>
                <div className={styles.headerWrapper}>
                    <div>
                    <h1 className={styles.headerTitle}>My Resume(s)</h1>
                    <p className={styles.headerSubtitle}>Manage your resumes effectively</p>
                </div>
            </div>  
        </div>
    </DashboardLayout>
  );
};
