from behave import *
from behave.api.async_step import async_run_until_complete

from models.account_page import AccountPage
from models.base_page import BasePage
from models.login_page import LoginPage
from behave import fixture, use_fixture
from behave.api.async_step import async_run_until_complete
from playwright.async_api import async_playwright

use_step_matcher("re")

@given(u'the login page is open')
@async_run_until_complete
async def open_login_url(context):
    login_page = LoginPage(context.page)
    await login_page.navigate()


@when(u'i fill "username" on Login page with value "Mike"')
@async_run_until_complete
async def fill_login_page_field(context, field: str, value: str):
    login_page = LoginPage(context.page)
    await login_page.fill_form_field(field, value)


@when(u'i click "{action}" button on the login page')
@async_run_until_complete
async def click_login_page_button(context, action:str):
    login_page = LoginPage(context.page)
    await login_page.click_button(action)


@then(u'the next page is "{title}" page')
@async_run_until_complete
async def is_next_page(context, title:str):
    base_page  = BasePage(context.page)
    await base_page.is_title_contains(title)


@then(u'the welcome text on Account page contains the value "{user}"')
@async_run_until_complete
async def step_impl(context, user:str):
    account_page = AccountPage(context.page)
    assert await account_page.is_welcome_text_contains(user)


@when(u'i fill "password" on Login page with value "pass"')
def step_impl(context):
    raise NotImplementedError(u'STEP: When i fill "password" on Login page with value "pass"')


@then(u'the next page is "Login" page')
def step_impl(context):
    raise NotImplementedError(u'STEP: Then the next page is "Login" page')


@then(u'the error message on login page is visible')
@async_run_until_complete
async def is_login_error_message(context, user:str):
    account_page = AccountPage(context.page)
    assert await account_page.is_welcome_text_contains(user)


