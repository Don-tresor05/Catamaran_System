import React from 'react';
// import { ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header style={{ 
      width: '100vw', 
      backgroundColor: 'transparent', 
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      margin: '0', 
      padding: '0',
			zIndex: '1000'
    }}>
      {/* Top border line */}
      <div style={{ position: 'absolute', top: '0', left: '0', right: '0', width: '100vw', height: '1px', backgroundColor: '#374151' }}></div>
      
			<div style={{ padding: '0', width: '100%', margin: '0' }}>
				<nav
					style={{
						boxSizing: 'border-box',
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						padding: '20px 18px',
						gap: '433px',
						isolation: 'isolate',
						width: '1316px',
						height: '89px',
						borderLeft: '2px solid #1C1C21',
						borderRight: '2px solid #1C1C21',
						margin: '0 auto',
						position: 'relative'
					}}
				>
          {/* Left Side - Logo */}
          <div style={{ display: 'flex', alignItems: 'center', minWidth: '120px' }}>
            <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '0.1em' }}>
              DAMIEN
            </div>
          </div>

          {/* Right Side - Contact Me */}
					<div style={{ display: 'flex', alignItems: 'center', minWidth: '120px', justifyContent: 'flex-end' }}>
						<button
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								padding: '14px 20px',
								gap: '10px',
								margin: '0 auto',
								width: '118px',
								height: '49px',
								background: '#1C1C21',
								borderRadius: '8px',
								color: '#FFFFFF',
								fontFamily: 'Manrope',
								fontStyle: 'normal',
								fontWeight: 500,
								fontSize: '14px',
								lineHeight: '150%',
								border: 'none',
								cursor: 'pointer',
								zIndex: 1
							}}
						>
							Contact Me
						</button>
					</div>

					{/* Bottom-aligned Buttons Container */}
					<div
						style={{
							position: 'absolute',
							left: '50%',
							transform: 'translateX(-50%)',
							bottom: '-0rem',
							width: '476px',
							height: '69px',
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							padding: '0px',
							boxSizing: 'border-box',
							borderWidth: '1px 1px 0px 1px',
							borderStyle: 'solid',
							borderColor: '#1C1C21',
							borderRadius: '10px 10px 0px 0px',
							background: '#0b0b0d',
							zIndex: 2
						}}
					>
						{/* Home (active) */}
						<button
							style={{
								width: '119px',
								height: '69px',
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'center',
								gap: '10px',
								padding: '24px 40px',
								boxSizing: 'border-box',
								background: '#131316',
								border: '1px solid #1C1C21',
								color: '#FFFFFF',
								fontFamily: 'Manrope',
								fontStyle: 'normal',
								fontWeight: 500,
								fontSize: '14px',
								lineHeight: '150%',
								cursor: 'pointer',
								outline: 'none'
							}}
						>
							Home
						</button>
						{/* About Me */}
						<button
							style={{
								width: '200px',
								height: '69px',
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'center',
								gap: '10px',
								padding: '24px 30px',
								borderRight: '1px solid #1C1C21',
								background: 'transparent',
								color: '#AFB0B6',
								fontFamily: 'Manrope',
								fontStyle: 'normal',
								fontWeight: 500,
								fontSize: '14px',
								lineHeight: '150%',
								cursor: 'pointer',
								outline: 'none',
								borderTop: 'none',
								borderBottom: 'none',
								borderLeft: 'none'
							}}
						>
							About Me
						</button>
						{/* Portfolio */}
						<button
							style={{
								width: '117px',
								height: '69px',
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'center',
								gap: '10px',
								padding: '24px 30px',
								borderRight: '1px solid #1C1C21',
								background: 'transparent',
								color: '#AFB0B6',
								fontFamily: 'Manrope',
								fontStyle: 'normal',
								fontWeight: 500,
								fontSize: '14px',
								lineHeight: '150%',
								cursor: 'pointer',
								outline: 'none',
								borderTop: 'none',
								borderBottom: 'none',
								borderLeft: 'none'
							}}
						>
							Portfolio
						</button>
						{/* Services */}
						<button
							style={{
								width: '117px',
								height: '69px',
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'center',
								gap: '10px',
								padding: '24px 30px',
								background: 'transparent',
								color: '#AFB0B6',
								fontFamily: 'Manrope',
								fontStyle: 'normal',
								fontWeight: 500,
								fontSize: '14px',
								lineHeight: '150%',
								cursor: 'pointer',
								outline: 'none',
								border: 'none'
							}}
						>
							Services
						</button>
					</div>
        </nav>
      </div>
      
      {/* Bottom border line */}
      <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', width: '100vw', height: '1px', backgroundColor: '#374151' }}></div>
    </header>
  );
};

export default Navbar;