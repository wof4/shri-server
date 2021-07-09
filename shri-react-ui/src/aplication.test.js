import { it } from '@jest/globals';
import { render, screen} from '@testing-library/react';
import events from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from './redux/reduxStore';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import App from './App';



it('переход со стартовой страницы на настройки по клику', () => {
    const history = createMemoryHistory({
        initialEntries: ['/start'],
        initialIndex: 0,
    });
    const aplication = (
        <Router history={history} >
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    );

    const { getByTestId } = render(aplication);

    events.click(getByTestId('setting'))
    screen.logTestingPlaygroundURL()

    expect(window.location.pathname).toEqual('/setting')
});

