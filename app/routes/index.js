import {Route, PureContainer, Section, Sandbox, Icon} from 'cx/widgets';
import {FirstVisibleChildLayout, ContentResolver} from 'cx/ui'

import AppLayout from '../layout';

import Default from './default';
import About from './about';

const AsyncRoute = ({route, prefix, onResolve}) => <cx>
    <Route
        route={route}
        url:bind="url"
        prefix
    >
        <div visible:bind="$page.routeLoading">
            <Icon name="routeLoading"/> Loading...
        </div>
        <ContentResolver
            onResolve={onResolve}
            loading:bind="$page.routeLoading"
        />
    </Route>
</cx>;

export default <cx>
    <Sandbox
        key:bind="url"
        storage:bind="pages"
        outerLayout={AppLayout}
        layout={FirstVisibleChildLayout}
    >
        <Route route="~/" url:bind="url">
            <Default/>
        </Route>

        <Route route="~/about" url:bind="url">
            <About/>
        </Route>

        <AsyncRoute
            route="~/map"
            onResolve={() =>
                System.import(/* webpackChunkName: 'map' */ "./map")
                      .then(m => m.default)
            }
        />
        <AsyncRoute
            route="~/orders"
            onResolve={() =>
                System.import(/* webpackChunkName: 'orders' */ "./orders")
                      .then(m => m.default)
            }
        />

        <AsyncRoute
            route="~/dashboard"
            onResolve={() =>
                System.import(/* webpackChunkName: 'dashboard' */ "./dashboard")
                      .then(m => m.default)
            }
        />

        <AsyncRoute
            route="~/timeline"
            onResolve={() =>
                System.import(/* webpackChunkName: 'timeline' */ "./timeline")
                      .then(m => m.default)
            }
        />

        <AsyncRoute
            route="~/user"
            prefix
            onResolve={() =>
                System.import(/* webpackChunkName: 'users' */ "./users")
                      .then(m => m.default)
            }
        />

        <Section title="Page Not Found" mod="card">
            This page doesn't exists. Please check your URL.
        </Section>
    </Sandbox>
</cx>

