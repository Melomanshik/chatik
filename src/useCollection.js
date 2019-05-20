import {useState, useEffect} from 'react';
import {db} from './firebase';

export default function useCollection(path, orderBy ) {
    const [docs, setDocs] = useState([]);
      
    useEffect(() => {
      let collection = db.collection(path)
      
      if (orderBy) {
        collection = collection.orderBy(orderBy);  
      }
      const unsubscribe = collection.onSnapshot(snapshot => {
        const docs = [];
        snapshot.forEach(doc => {
          docs.push({
            ...doc.data(),
            id: doc.id
          });
        });
        setDocs(docs);     
      });
      return unsubscribe;
    }, [path, orderBy]);
    return docs;
  }