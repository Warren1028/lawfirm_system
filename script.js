// Smooth scroll animation on page load
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const elements = document.querySelectorAll(
        '.feature-card, .partner-card, .stat-card, .kanban-column, .platform-item'
    );

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// Smooth navbar transitions
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Button handlers
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        const text = button.textContent.trim();

        if (text === 'Try Demo' || text === 'Try Interactive Demo') {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const dashboardSection = document.querySelector('#dashboard');
                if (dashboardSection) {
                    dashboardSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        } else if (text === 'Learn More') {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const featuresSection = document.querySelector('#features');
                if (featuresSection) {
                    featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        } else if (text === 'Get In Touch') {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                window.open('https://calendly.com/warrren10-ocampo/new-meeting', '_blank');
            });
        }
    });
});

// Card hover effects
const cards = document.querySelectorAll('.card, .feature-card, .partner-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Dashboard Demo Interactivity
function createNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'demo-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 70px;
        left: 50%;
        transform: translateX(-50%);
        background: #4CAF50;
        color: white;
        padding: 16px 32px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideDown 0.3s ease-out;
        font-weight: 500;
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from { transform: translateX(-50%) translateY(-20px); opacity: 0; }
        to { transform: translateX(-50%) translateY(0); opacity: 1; }
    }
    @keyframes slideUp {
        from { transform: translateX(-50%) translateY(0); opacity: 1; }
        to { transform: translateX(-50%) translateY(-20px); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Add click handlers to kanban buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.kanban-cards .btn-sm');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.card');
            const cardName = card.querySelector('h4').textContent;
            const buttonText = this.textContent.trim();
            const currentColumn = card.closest('.kanban-column');
            const allColumns = document.querySelectorAll('.kanban-column');

            let targetColumnIndex = null;
            let notificationText = '';

            if (buttonText === 'Qualify') {
                targetColumnIndex = 1; // Pending → Sent
                notificationText = `✓ Form sent to ${cardName}`;
                card.classList.remove('card-overdue');
            } else if (buttonText === 'Resend') {
                targetColumnIndex = 2; // Sent → In Progress
                notificationText = `✓ Form resent to ${cardName}`;
            } else if (buttonText === 'View') {
                const progressPercent = card.querySelector('.progress-text')?.textContent || '0%';
                notificationText = `✓ ${cardName}'s form is ${progressPercent} complete`;
                createNotification(notificationText);
                return;
            } else if (buttonText === 'Remind') {
                notificationText = `✓ Reminder sent to ${cardName}`;
                createNotification(notificationText);
                return;
            } else if (buttonText === '→ Submit') {
                targetColumnIndex = 4; // Completed → Submitted
                notificationText = `✓ Submitted ${cardName} to your CMS`;
                card.classList.remove('card-completed');
                card.classList.add('card-submitted');
                this.textContent = 'Submitted';
                this.disabled = true;
            }

            if (targetColumnIndex !== null) {
                const targetColumn = allColumns[targetColumnIndex];
                const targetCardContainer = targetColumn.querySelector('.kanban-cards');
                const columnHeader = targetColumn.querySelector('.column-header h3').textContent;

                // Update badge numbers
                const currentBadge = currentColumn.querySelector('.badge');
                const targetBadge = targetColumn.querySelector('.badge');

                if (currentBadge) {
                    let currentCount = parseInt(currentBadge.textContent) || 0;
                    currentBadge.textContent = Math.max(0, currentCount - 1);
                }

                if (targetBadge) {
                    let targetCount = parseInt(targetBadge.textContent) || 0;
                    targetBadge.textContent = targetCount + 1;
                }

                // Update button based on target column
                const buttonToUpdate = card.querySelector('.btn-sm');
                if (columnHeader === 'Sent') {
                    buttonToUpdate.textContent = 'Resend';
                    buttonToUpdate.disabled = false;
                    buttonToUpdate.className = 'btn btn-sm';
                } else if (columnHeader === 'In Progress') {
                    buttonToUpdate.textContent = 'View';
                    buttonToUpdate.disabled = false;
                    buttonToUpdate.className = 'btn btn-sm';
                } else if (columnHeader === 'Completed') {
                    buttonToUpdate.textContent = '→ Submit';
                    buttonToUpdate.disabled = false;
                    buttonToUpdate.className = 'btn btn-sm btn-submit';
                } else if (columnHeader === 'Submitted') {
                    buttonToUpdate.textContent = 'Submitted';
                    buttonToUpdate.disabled = true;
                    buttonToUpdate.className = 'btn btn-sm';
                }

                card.style.animation = 'fadeOut 0.3s ease-out';
                setTimeout(() => {
                    targetCardContainer.prepend(card);
                    card.style.animation = 'fadeIn 0.3s ease-in';
                    setTimeout(() => { card.style.animation = 'none'; }, 300);

                    // Auto-scroll to show the card
                    const dashboardScroll = document.querySelector('.dashboard-scroll');
                    if (dashboardScroll) {
                        targetColumn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                    }
                }, 300);
            }

            createNotification(notificationText);
        });
    });
});
