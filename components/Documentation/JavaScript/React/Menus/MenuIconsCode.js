import React, { useState } from 'react';
import DocsSnippet from 'components/Documentation/DocsSnippet.js';
import Frameworks from 'components/Documentation/Frameworks.js';
import Navbar from 'components/Navbar/Navbar';
import NavbarContainer from 'components/Navbar/NavbarContainer';
import NavbarWrapper from 'components/Navbar/NavbarWrapper';
import NavbarBrand from 'components/Navbar/NavbarBrand';
import NavbarToggler from 'components/Navbar/NavbarToggler';
import Collapse from 'components/Navbar/Collapse';
import Nav from 'components/Nav/Nav';
import NavItem from 'components/Nav/NavItem';
import Icon from 'components/Icon/Icon';
import 'ripple/ripple';

export default function MenuIconsCode({ copyText, onCopy }) {
  const [color, setColor] = useState('pink');
  const [type] = useState('react');
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState();
  const [openMenu, setOpenMenu] = useState(false);

  const onFrameworkClick = Frameworks(type, setShowModal, setModalText);

  const codeToShow = `import React, { useState } from "react";
import Navbar from "components/Navbar/Navbar";
import NavbarContainer from "components/Navbar/NavbarContainer";
import NavbarWrapper from "components/Navbar/NavbarWrapper";
import NavbarBrand from "components/Navbar/NavbarBrand";
import NavbarToggler from "components/Navbar/NavbarToggler";
import Collapse from "components/Navbar/Collapse";
import Nav from "components/Nav/Nav";
import NavItem from "components/Nav/NavItem";
import Icon from "components/Icon/Icon";
import "@md-ripple-effect"

export default function Menus() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Navbar color="${color}">
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarBrand color="white">Menu</NavbarBrand>
          <NavbarToggler color="white" onClick={() => setOpenMenu(!openMenu)} />
        </NavbarWrapper>

        <Collapse open={openMenu}>
          <Nav>
            <NavItem
              active="light"
              color="white"
              href="#navbar"
              data-md-ripple-light={true}
            >
              <Icon name="language" size="xl" />
            </NavItem>
            <NavItem color="white" href="#navbar" data-md-ripple-light={true}>
              <Icon name="account_circle" size="xl" />
            </NavItem>
            <NavItem color="white" href="#navbar" data-md-ripple-light={true}>
              <Icon name="settings" size="xl" />
            </NavItem>
          </Nav>
        </Collapse>
      </NavbarContainer>
    </Navbar>
  );
}`;

  return (
    <>
      {showModal ? (
        <>
          <div
            className="block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h5 className="text-2xl font-normal mt-0 mb-0 ">
                    Component not supported
                  </h5>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="text-base leading-relaxed text-gray-600 font-normal mt-0 mb-4">
                    At the moment we do not support the choosen framework (
                    {modalText}) for this component.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <DocsSnippet
        copyText={copyText}
        onCopy={onCopy}
        activeColor={color}
        activeFramework={type}
        codeToShow={codeToShow}
        onColorClick={(color) => setColor(color)}
        onFrameworkClick={onFrameworkClick}
      >
        <Navbar color={color}>
          <NavbarContainer>
            <NavbarWrapper>
              <NavbarBrand color="white">Menu</NavbarBrand>
              <NavbarToggler
                color="white"
                onClick={() => setOpenMenu(!openMenu)}
              />
            </NavbarWrapper>

            <Collapse open={openMenu}>
              <Nav>
                <NavItem
                  active="light"
                  color="white"
                  href="#navbar"
                  data-md-ripple-light={true}
                >
                  <Icon name="language" size="xl" />
                </NavItem>
                <NavItem
                  color="white"
                  href="#navbar"
                  data-md-ripple-light={true}
                >
                  <Icon name="account_circle" size="xl" />
                </NavItem>
                <NavItem
                  color="white"
                  href="#navbar"
                  data-md-ripple-light={true}
                >
                  <Icon name="settings" size="xl" />
                </NavItem>
              </Nav>
            </Collapse>
          </NavbarContainer>
        </Navbar>
      </DocsSnippet>
    </>
  );
}