import React from "react";
import Modal from "../../containers/Modal";
import { Wrapper, FormWrapper } from "./styled";
import Category from "../Categories/Category";

const CategoryModal = ({ show, title, onClose, categories }) => (
  <>
    {show ? (
      <Modal extralarge title={title} onClose={onClose}>
        <Wrapper>
          {categories.map((category, i) => {
            return (
              <Category
                key={i}
                text={category.text}
                selected={category.selected}
              />
            );
          })}
        </Wrapper>
        <FormWrapper>
          <input type="text" placeholder="Ciudades, Naturaleza..." />
          <button type="submit">Submit</button>
        </FormWrapper>
      </Modal>
    ) : (
      ""
    )}
  </>
);

export default CategoryModal;
