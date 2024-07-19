import { createContext, useContext, useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, orderBy } from 'firebase/firestore';
import { app } from '../firebase';

// Create a Context for the data
const DataContext = createContext();

// Create a Provider component
export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [projects, setProjects] = useState([]);
  const db = getFirestore(app);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user data
        const userQuerySnapshot = await getDocs(collection(db, "user"));
        const userData = userQuerySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setUserData(userData[0]); // Assuming you want the first document's data

        // Fetch projects data and order them by a field, e.g., 'order'
        const projectsQuerySnapshot = await getDocs(collection(db, "projects"));
        const projectsData = projectsQuerySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })).sort((a, b) => a.order - b.order); // Sort by 'order' field
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };
    fetchData();
  }, [db]);

  return (
    <DataContext.Provider value={{ userData, projects }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use the data
export const useUserData = () => useContext(DataContext);
