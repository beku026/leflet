import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedRoute } from '../reducers/selectedRouteReducer';
import { Table } from 'antd';

const pathCoordinates1 = [
  [59.84660399, 30.29496392],
  [59.82934196, 30.42423701], 
  [59.83567701, 30.38064206]
];


const pathCoordinates2 = [
  [59.82934196, 30.42423701],
  [59.82761295, 30.41705607], 
  [59.84660399, 30.29496392]
];


const pathCoordinates3 = [
  [59.83567701, 30.38064206],
  [59.84660392, 30.29496392], 
  [59.82761295, 30.41705607]
];

const RouteTable = () => {
  const dispatch = useDispatch();
  
  const handleRouteSelect = (route) => {
    dispatch(setSelectedRoute(route));
  };
  
  const columns = [
    {
      title: 'Маршрут',
      dataIndex: 'route',
      key: 'route',
    },
    {
      title: 'Выбрать',
      dataIndex: 'selected',
      key: 'selected',
      render:(e) =>  (<button onClick={() => handleRouteSelect(e)}>выбрать</button>)
    },
  ];
  const data = [
    {
      key: '1',
      route: 'Маршрут 1',
      selected: pathCoordinates1
    },
    {
      key: '2',
      route: 'Маршрут 2',
      selected: pathCoordinates2
    },
    {
      key: '3',
      route: 'Маршрут 3',
      selected: pathCoordinates3
    },
  ];

  return (
    <>
      <Table 
        pagination={false} 
        columns={columns} 
        dataSource={data}
      />
    </>
  );
};

export default RouteTable;