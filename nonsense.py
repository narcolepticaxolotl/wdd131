# 20260307
"""

PROMPT the user for start_date
PROMPT the user for end_date

start_year <- start_date[year]
start_month <- start_date[month]
start_day <- start_date[day]
end_year <- end_date[year]
end_month <- end_date[month]
end_day <- end_date[day]

years <- 0
months <- 0
days <- 0

years_dif <- end_year - start_year
IF years_dif = 0
    months_dif = end_month - start_month
    IF months_dif = 0
        days <- end_day - start_day
        PUT days as the output.
        // assert days should be less than 32 in this branch.
    END IF
    IF months_dif > 0
        eom <- find_days_in_month(start_month)
        days += eom - start_day
        days += end_day
        // assert days should never be more than 62. I think 61 actually is the max, even from July 1st to August 31st
    END IF
    IF months_dif > 1
        list_months <- identify_whole_months(start_month, end_month)
        FOR m in list_months
            days_in_month <- find_days_in_month(m)
            months += days_in_month
        END FOR
    END IF
    // assert days + months is not greater than 366.
    PUT days + months as the output.
END IF

IF years_dif = 1
    eom <- find_days_in_month(start_month)
    days += eom - start_day
    days += end_day
    // assert days should never be more than 62.

    list_months <- identify_whole_months(start_month, 13)
    list_months += identify_whole_months(0, end_month)
    // This function `identify_whole_months` will assume that the
    // indices will not be counted as whole months, only the months
    // in between. So we need to put 13 in order for it to include
    // December and 0 in order for it to include January.
    FOR m in list_months
        days_in_month <- find_days_in_month(m)
        months += days_in_month
    END FOR
    // assert days + months is not greater than the number of days in 2 whole years.
    PUT days + months as the output.
END IF

IF years_dif > 1
    years <- 365 * (years_dif - 1)
    // assert years should be a multiple of 365 above 0 and probably should be an integer.
    leap_days = identify_leap_days()
    years += leap_days

    eom <- find_days_in_month(start_month)
    days += eom - start_day
    days += end_day
    // assert days should never be more than 62.

    list_months <- identify_whole_months(start_month, 13)
    list_months += identify_whole_months(0, end_month)
    FOR m in list_months
        days_in_month <- find_days_in_month(m)
        months += days_in_month
    END FOR

    // assert days + months is not greater than the number of days in 2 whole years.
    PUT days + months + years as the output.


"""