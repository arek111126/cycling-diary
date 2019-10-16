package pl.cyclingDiary.security;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
public class UserInSessionService {
    private String loggedUserName;

    public String getUserFromSessionByLogin() {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }
}
