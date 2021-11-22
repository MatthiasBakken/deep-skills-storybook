import { LoginModal, LoginModalProps } from './login'
import { render } from '../../../test-utils'

const mockProps: LoginModalProps = {
  isOpen: true,
  onClose: jest.fn(),
  onLogin: jest.fn(),
  onRegister: jest.fn()
}
const setup = (props = mockProps) => render(<LoginModal {...props} />)

describe('LoginModal', () => {
  it('should render correctly', () => {
    const { baseElement } = setup()
    expect(baseElement).toBeVisible()
  })
})
