import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

export default class TestGrid extends React.Component {

  public render(): JSX.Element {
    return (
      <GridComponent dataSource={data}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' width='100' textAlign='Right' />
          <ColumnDirective field='CustomerID' width='100' />
          <ColumnDirective field='EmployeeID' width='100' textAlign='Right' />
          <ColumnDirective field='Freight' width='100' format='C2' textAlign='Right' />
          <ColumnDirective field='ShipCountry' width='100' />
        </ColumnsDirective>
      </GridComponent>
    );
  }

}
