'use client'

import Image from 'next/image';
import classNames from 'classnames/bind';
import { useState } from 'react'
import styles from './Description.module.sass'


const PLACEHOLDER_IMAGE = 'data: image/jpeg;base64,/9j / 4AAQSkZJRgABAQAAAQABAAD / 4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb / 2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj / 2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj / wAARCABrAGsDASIAAhEBAxEB / 8QAHAAAAgMBAQEBAAAAAAAAAAAABAUCAwYAAQcI / 8QAJRAAAgICAgICAgMBAAAAAAAAAAECAwQhETEFYRITFCIGJEFR / 8QAGQEBAQEBAQEAAAAAAAAAAAAABAMCBQEA / 8QAHhEAAwADAQEAAwAAAAAAAAAAAAECAxEhMRIEE0H / 2gAMAwEAAhEDEQA / AFk + gLIWg + S0B3x0yciaEmYuxHlx7NFlQ55FORVyxuFnP / IW0JYVv7B54 + PHANXR + 3Q1wqeOBdVtHLx4 / mhthLSHOOtIW4dfQ3ojoJZ0cZalopu6CVHRRctMgxKEuf0zJ + X6ka7OWmZXy8dSPZ9PmfNfPL + wKh3 / ACGHFvPsS8C2tpE44j9LyQLdENaKLInOkdQpyK + eQC2nl9Dq2vkGlTy + hWNgMwsrx99DHFp60WV076Dsenos6Bqel2NV0MqoaKsevoOrgQpiYIOINetMPcdAmQtMkxCEectMy3lY6kazNWmZjycdM9k3o + efyGrmMml0Zzg2fmK / kpGXnjP5Pg6GJprTMfD / AIfo9lc0WNkWctCaBpw5IfXsJaOUS8gspVXUGUV9HlcAuqJTYbXS2mAVGOiFaLl0SplYISWgPI6YbPoByH2TYiRPndMzXkl2aTNemZvyP + nslUjJeThy2IpVfs9Gi8itsTyjtjIfCiR9s + R3JT8zvkARmmW8k4lKkTjItITIFVhVYFCQTCZthwyDLPkCxmSdhKisllkgDJlpltlmmAZFhNiJAM2WmZ3yEuxzmWaZns + zs3JVCHPe2K29hufZtiqVi5YuPC0o + w / YeqwB + 32e / aBQemHqwsjYLVaTV3stIaxrCwuhaKY3ey2N / s0yI3V3s53a7FayPZ48jXZKish1t3sAyLu9lNuR7AMjI12SbESQzLu9mfz7u9heZkd7M95HJ4T2bgqhf5HI452J3e2yOflfOb3pAP3HQjiKfsUcZ9o +077gH7SLt9nOkE6D / u9nqv8AYsd3si7 / AGXkjTG6yPZNZPsSfkezvyvZpowmPfyvZGWV7EjyvZXLL9h7ZeBvblewDIytPYutzPYuys3jnYerSESgnNy9PZl / LZ / cU9neS8hwmk9iKybnJuT2VxU / TTfyezscnyyPLPDiztsl6fWHMhKZ4VzJSHbOnYUTtPbOgawTBCmTleReR7BpPZW2UaPJfQt5D / 6UzyWv9B2yi1gs70hmPpO / Ke9irNy2k0nsuub4Yoyn + zDYoVPbFLi2U2Tc5NtkTjhhFvZxxxx8fH//2Q=='

export const Description = () => {
    const [hasBorder, setBorder] = useState(false);

    const handleClick = () => setBorder(!hasBorder);

    const cx = classNames.bind(styles);

    const buttonStyles = cx('Description__button', {
        'Description__button--border': hasBorder,
    })

    return (
        <section className={styles.Description}>
            <button onClick={handleClick} className={buttonStyles}>
                <div className={styles.Description__imageContainer}>
                    <Image
                        src="/images/description.jpeg"
                        alt="products marketplace"
                        fill
                        placeholder='blur'
                        blurDataURL={PLACEHOLDER_IMAGE} />
                </div>
            </button>
            <div className={styles.Description__text}>
                <h2>Bring the future today</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error dolore voluptate, animi aperiam dicta pariatur sequi neque vel sit incidunt commodi est molestiae ullam veritatis asperiores consequatur! Autem, pariatur beatae.</p>
            </div>
        </section>
    )
}