import React from 'react'
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import {withRouter} from "react-router";
import PermRender from '../_common/PermRender';

const DashboardDropdownMenu = ({history, authorizedUser, routeName}) => {
    return (
        <UncontrolledDropdown className="btn-rotate" nav active={["Dashboard Home", "Company", "Payout", "Applications"].includes(routeName)}>
            <DropdownToggle caret nav>
                Dashboard
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem
                    href="/home/dashboard"
                    onClick={()=> history.push('/home/dashboard') && false}
                    active={routeName === "Dashboard Home"}
                >
                    <i className={"bi bi-house"} style={Styles.icon}/>
                    Home
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                    href="/home/dashboard/company"
                    onClick={()=> history.push('/home/dashboard/company') && false}
                    active={routeName === "Company"}
                >
                    <i className={"bi bi-kanban"} style={Styles.icon}/>
                    Management
                </DropdownItem>
                <PermRender perms={[3,2,1]} authorizedUser={authorizedUser}>
                    <DropdownItem
                        href="/home/dashboard/payout"
                        onClick={()=> history.push('/home/dashboard/payout') && false}
                        active={routeName === "Payout"}
                    >
                        <i className={"bi bi-wallet"} style={Styles.icon}/>
                        Payout
                    </DropdownItem>
                </PermRender>
                <PermRender perms={[3,2]} authorizedUser={authorizedUser}>
                    <DropdownItem
                        href="/home/dashboard/hire"
                        onClick={()=> history.push('/home/dashboard/hire') && false}
                        active={routeName === "Applications"}
                    >
                        <i className={"bi bi-file-person"} style={Styles.icon}/>
                        Applications
                    </DropdownItem>
                </PermRender>
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}

export default withRouter(DashboardDropdownMenu)

const Styles = {
    icon: {
        marginRight: "10px",
        transition: "opacity 0.3s !important",
        transform: "rotate(0deg) !important",
        display: 'inline-block'
    }
}