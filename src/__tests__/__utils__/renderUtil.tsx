import { AlertContext, alertContextValueType } from '../../context/alert';

export function renderWithAlertContext(
    children: JSX.Element,
    providerVal: alertContextValueType
): JSX.Element {
    return (
        <AlertContext.Provider value={providerVal}>
            {children}
        </AlertContext.Provider>
    );
}
