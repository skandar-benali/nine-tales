import React, { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
`;
const Button = () => {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <StyledButton onClick={() => setCount(count + 1)}>
        Cliquez ici
      </StyledButton>
    </div>
  );
};

export default Button;
export { Button };
