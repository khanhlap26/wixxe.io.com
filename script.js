document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();

    // Add click event listeners to link buttons
    const linkButtons = document.querySelectorAll('.link-button');
    linkButtons.forEach(button => {
        button.addEventListener('click', function() {
            const url = this.getAttribute('data-href');
            if (url) {
                window.open(url, '_blank');
            }
        });
    });

    // Add hover animation to QR codes
    const qrCodes = document.querySelectorAll('.qr-code');
    qrCodes.forEach(qrCode => {
        qrCode.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        qrCode.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add subtle animation to the avatar
    const avatar = document.querySelector('.avatar');
    setInterval(() => {
        avatar.style.transform = 'scale(1.02)';
        setTimeout(() => {
            avatar.style.transform = 'scale(1)';
        }, 500);
    }, 3000);
});