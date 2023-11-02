import React, { useState } from 'react';
import styled from 'styled-components';
import item1 from './images/item_1.png';
import item2 from './images/item_2.png';
import item3 from './images/item_3.png';
import ModalListGoodsMine from '../common/Modal/ModalListGoodsMine';

const StyledGoodListMines = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #fff;
  padding: 20px 0;
  padding-left: 16px;
  margin-top: 6px;

  & .item-list {
    display: flex;
    align-items: center;
    gap: 10px;
    /* overflow-x: scroll; */
    overflow: hidden;
  }
  & .store-wrapper > p {
    color: #000;
    font-size: 16px;
    font-weight: 700;
  }
  & .item {
    display: flex;
    flex-direction: column;
  }
  & .item-name {
    padding-top: 6px;
    color: #000;
    font-size: 14px;
    font-weight: 400;
  }
  & .item-price {
    padding-top: 4px;
    color: #515fec;
    font-size: 12px;
    font-weight: 700;
  }
`;
const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 90;
  background-color: rgba(0, 0, 0, 0.5);
`;
export default function GoodListMines({ products }) {
  const [isGoods, setIsGoods] = useState(false);

  const handleGoodsClick = () => {
    setIsGoods(!isGoods);
  };
  return (
    <>
      <StyledGoodListMines>
        <p>판매 중인 상품</p>
        <ul className="item-list">
          {products &&
            products.map((product, index) => (
              <li className="item" onClick={handleGoodsClick} key={index}>
                <img src={product.itemImage} alt={`아이템${index + 1}`} />
                <span className="item-name">{product.itemName}</span>
                <span className="item-price">{`${product.price}원`}</span>
              </li>
            ))}
        </ul>
      </StyledGoodListMines>
      {isGoods && (
        <>
          <StyledOverlay onClick={handleGoodsClick} />
          <ModalListGoodsMine />
        </>
      )}
    </>
  );
}
