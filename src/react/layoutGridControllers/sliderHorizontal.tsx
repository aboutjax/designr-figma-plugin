import * as React from "react";
import styled from "styled-components";

const StyledOption = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
`;

const StyledRadio = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0.5em;
`;

const StyledRadioGroup = styled.div`
  display: flex;
`;

const Option = (props) => (
  <StyledOption>
    <h4 className="tiny-header">{props.type} Padding</h4>
    <StyledRadioGroup>
      <StyledRadio htmlFor={props.type + "-0"}>
        <input
          type="radio"
          id={props.type + "-0"}
          name={props.type}
          value="0"
          onChange={props.onChange}
        />
        <span>0</span>
      </StyledRadio>
      <StyledRadio htmlFor={props.type + "-1"}>
        <input
          type="radio"
          id={props.type + "-1"}
          name={props.type}
          value="1"
          onChange={props.onChange}
        />
        <span>1</span>
      </StyledRadio>
      <StyledRadio htmlFor={props.type + "-2"}>
        <input
          type="radio"
          id={props.type + "-2"}
          name={props.type}
          value="2"
          onChange={props.onChange}
        />
        <span>2</span>
      </StyledRadio>
      <StyledRadio htmlFor={props.type + "-3"}>
        <input
          type="radio"
          id={props.type + "-3"}
          name={props.type}
          value="3"
          onChange={props.onChange}
        />
        <span>3</span>
      </StyledRadio>
      <StyledRadio htmlFor={props.type + "-4"}>
        <input
          type="radio"
          id={props.type + "-4"}
          name={props.type}
          value="4"
          onChange={props.onChange}
        />
        <span>4</span>
      </StyledRadio>
      <StyledRadio htmlFor={props.type + "-5"}>
        <input
          type="radio"
          id={props.type + "-5"}
          name={props.type}
          value="5"
          onChange={props.onChange}
        />
        <span>5</span>
      </StyledRadio>
      <StyledRadio htmlFor={props.type + "-6"}>
        <input
          type="radio"
          id={props.type + "-6"}
          name={props.type}
          value="6"
          onChange={props.onChange}
        />
        <span>6</span>
      </StyledRadio>
      <StyledRadio htmlFor={props.type + "-7"}>
        <input
          type="radio"
          id={props.type + "-7"}
          name={props.type}
          value="7"
          onChange={props.onChange}
        />
        <span>7</span>
      </StyledRadio>
    </StyledRadioGroup>
  </StyledOption>
);

export { Option };
