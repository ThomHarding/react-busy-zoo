import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import MOCK_DATA from './MOCK_DATA.json';

export default function MyTable() {
  const [customers, setCustomers] = useState([]);

  async function load() {
    setCustomers(MOCK_DATA);
  }

  useEffect(() => {
    load();
      }, []); // eslint-disable-line

  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        columns={
          [
            { title: 'Id', field: 'id' },
            { title: 'First Name', field: 'first_name' },
            { title: 'Last Name', field: 'last_name' },
            { title: 'Email', field: 'email' },
            { title: 'Suffix', field: 'suffix' },
            { title: 'Lucky', field: 'is_lucky' }
          ]
        }
        data={customers}
    
        title="Customer Data"
        options={{  
          headerStyle: { 
            background: 'teal',
          },
          rowStyle: { 
            background: 'lightgreen',
          }
        }
        }
        localization={{
          pagination: {
            nextAriaLabel: 'next',
            previousAriaLabel: 'prev'
          } 
        }}

      />      </div>
  );
}
