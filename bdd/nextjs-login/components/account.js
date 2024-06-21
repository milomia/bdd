'use strict'

import { withRouter } from "next/router"

const Account = (props) => {
    return (
        <>
        <div id="welcome-text">
            Welcome, {props.router.query.name}
        </div>
        </>
    )
}
export default withRouter(Account)