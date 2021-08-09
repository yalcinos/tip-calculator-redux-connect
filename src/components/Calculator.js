import { Card } from '@twilio-paste/core';
import { NewItemFormContainer } from '../containers/ItemItemFormContainer';
import { MenuItemsContainer } from '../containers/MenuItemsContainer';
import { SummaryContainer } from '../containers/SummaryContainer';
import { TipSelectContainer } from '../containers/TipSelectContainer';

const Calculator = () => {
  return (
    <Card>
      <NewItemFormContainer />
      <MenuItemsContainer/>
      <TipSelectContainer />
      <SummaryContainer />
    </Card>
  );
};

export default Calculator;
