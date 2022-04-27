import RCMenu, { MenuItem as RCMenuItem } from 'rc-menu'
import styled from 'styled-components'

export const Menu = styled(RCMenu)`
  height: 100%;
  border: 0;
  border-right: 1px solid #d6dade;
`

export const MenuItem = styled(RCMenuItem)`
  cursor: pointer;
  color: #717d8a;
  &.rc-menu-item-selected {
    background-color: white;
    color: #373f47;
    font-weight: bold;
    ::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      /* background: #da2b25; */
      border-radius: 0px 4px 4px 0px;
    }
  }
`
