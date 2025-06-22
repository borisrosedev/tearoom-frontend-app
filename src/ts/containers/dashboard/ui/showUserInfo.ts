export default function showUserInfo(user: any) {
    return `
                <article class="info__user">
                    <section class="info__user-role-section">
                        <span aria-label="info__role">Role: ${user.role}</span>
                    </section>
                    <section class="info__user-fullname-section">
                        <span aria-label="user firstname">Firstname: ${user.firstName}</span><span aria-label="user lastname">Lastname: ${user.lastName}</span>
                    </section>
                     <section class="info__user-credentials-section">
                        <span aria-label="user email"><i class="fa-solid fa-envelope"></i> ${user.email}</span><span aria-label="user fake password"><i class="fa-solid fa-lock"></i> **********</span>
                    </section>
                </article>

            
            `;
  }
