import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Button } from 'zarm';

const Index = () => {
  const history = useHistory();
  return (
    <div>
      <Button>按钮</Button>
    </div>
  );
};
export default Index;
