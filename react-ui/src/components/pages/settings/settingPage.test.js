import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import store from '../../../redux/reduxStore';

import SettingPage from './settingPage';

describe('Компонент: SettingPage', () => {
    it('компонент settingPage рендерится корректно', () => {
        const { container } = render(<Provider store={store}>
            <SettingPage />
        </Provider>);
        expect(container).toMatchSnapshot();
    });

    it('компонент', () => {
        const { getByText, getByTestId } = render(<Provider store={store}>
            <SettingPage />
        </Provider>);
        expect(getByText('School CI server')).toBeInTheDocument();
        expect(getByText('Settings')).toBeInTheDocument();
        expect(getByText('GitHub repository')).toBeInTheDocument();
        expect(getByText('Build command')).toBeInTheDocument();
        expect(getByText('Main branch')).toBeInTheDocument();
        expect(getByTestId('repoName')).toBeInTheDocument();
        expect(getByTestId('buildCommand')).toBeInTheDocument();
        expect(getByTestId('mainBranch')).toBeInTheDocument();
        expect(getByTestId('button-add-settings')).toBeInTheDocument();
        expect(getByTestId('button-cansel')).toBeInTheDocument();
    });
});
